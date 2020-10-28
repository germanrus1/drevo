import axios from "axios";

const state = {
  buttonType: 'create', // todo надо доделать или удалить
  treeForm: {
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
    axios({
      url: '/api/tree/',
      method: 'post',
      data: {
        name: treeForm.name.value,
        description: treeForm.description.value,
        avatar_url: treeForm.avatar_url.value,
      }
    })
      .then(resp => {
        let data = resp.data.data;
        console.log(data);
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