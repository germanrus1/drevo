import axios from "axios";

const state = {
  buttonType: 'create', // todo надо доделать или удалить
  treeForm: {
    id: {
      label: 'ID',
      value: '',
      show: false,
    },
    name: {
      label: 'Название',
      value: '',
      show: true,
    },
    description: {
      label: 'Описание',
      value: '',
      show: true,
    },
    avatar_url: {
      label: 'Фото',
      value: '',
      show: true,
    },
  },
}

const getters = {
  getTreeForm: state => {
    console.log(state.treeForm);
    return state.treeForm;
  },
  // getButtonType: state => {
  //   return state.buttonType;
  // },
}

const actions = {
  setTreeForm: ({commit}, treeForm) => {
    commit('setTreeForm', treeForm)
  },
  createTree: (context, treeForm) => {
    console.log(treeForm);
    axios({
    url: '/api/tree/',
      method: 'post',
      data: {
        name: treeForm.form.name.value,
        description: treeForm.form.description.value,
        avatar_url: treeForm.form.avatar_url.value,
      }
    })
      .then(resp => {
        let data = resp.data.data;
        // context.dispatch('makeToast', data.message, 'Ошибка', 'success')
        this.makeToast(data.message, 'Ошибка', 'success');
      })
      .catch(err => {
        this.makeToast(err.response.data.message, 'Ошибка', 'danger');
    })
  },
  updateTree: (context, treeForm) => {
    axios({
      url: '/api/tree/' + treeForm.form.id.value,
      method: 'put',
      data: {
        name: treeForm.form.name.value,
        description: treeForm.form.description.value,
        avatar_url: treeForm.form.avatar_url.value,
      }
    })
      .then(resp => {
        let data = resp.data;
        console.log(data.message)
      })
      .catch(err => {
        this.makeToast(err.response.data.message, 'Ошибка', 'danger');
    })
  },
}

const mutations = {
  setTreeForm: (state, treeForm) => {
    state.buttonType = 'update'

    if (!treeForm) {
      treeForm = {}
      state.buttonType = 'create'
    }

    let keys = Object.keys(state.treeForm)
    keys.forEach(key => {
      state.treeForm[key].value = treeForm[key];
    })
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};