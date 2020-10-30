import axios from "axios";

const state = {
  typeChange: 'create',
  form: {
    id: {
      label: 'Id',
      value: '',
      show: false,
    },
    name: {
      label: 'Имя',
      value: '',
      show: true,
    },
    last_name: {
      label: 'Фамилия',
      value: '',
      show: true,
    },
    data_of_birth: {
      label: 'Дата рождения ',
      value: '',
      show: true,
    },
    data_of_death: {
      label: 'Дата смерти ',
      value: '',
      show: true,
    },
    gender: {
      label: 'Пол',
      value: '',
      select: ['Мужской', 'Женский'],
      show: true,
    },
    father_parent_id: {
      label: 'Отец',
      value: '',
      show: true,
    },
    mother_parent_id: {
      label: 'Мать',
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
    adopted: {
      label: 'Усыновленный',
      value: '',
      show: true,
      select: ['Да', 'Нет'],
    },
  },
}

const getters = {
  getForm: state => {
    return state.form;
  },
  getTypeChange: state => {
    return state.typeChange;
  },
}

const actions = {
  setForm: ({commit}, form) => {
    commit('setForm', form)
  },
  setTypeChange: ({state}, type) => {
    state.typeChange = type;
  },
  createTreeItem: (context, treeItemForm) => {
    axios({
      url: '/api/treeItem/',
      method: 'post',
      data: {
        tree_id: treeItemForm.tree_id,
        name: treeItemForm.form.name.value,
        last_name: treeItemForm.form.last_name.value,
        data_of_birth: treeItemForm.form.data_of_birth.value,
        data_of_death: treeItemForm.form.data_of_death.value,
        gender: treeItemForm.form.gender.value,
        father_parent_id: treeItemForm.form.father_parent_id.value,
        mother_parent_id: treeItemForm.form.mother_parent_id.value,
        description: treeItemForm.form.description.value,
        avatar_url: treeItemForm.form.avatar_url.value,
        adopted: undefined,
      }
    })
      .then(resp => {
        let data = resp.data.data;
        console.log(data.message);
        // this.makeToast(data.message, 'Ошибка', 'success');
      })
      .catch(err => {
        console.log(err.response.data.message);
        // this.makeToast(err.response.data.message, 'Ошибка', 'danger');
    })
  },
  updateTreeItem: (context, treeItemForm) => {
    axios({
      url: '/api/treeItem/' + treeItemForm.form.id.value,
      method: 'put',
      data: {
        name: treeItemForm.form.name.value,
        last_name: treeItemForm.form.last_name.value,
        data_of_birth: treeItemForm.form.data_of_birth.value,
        data_of_death: treeItemForm.form.data_of_death.value,
        gender: treeItemForm.form.gender.value,
        father_parent_id: treeItemForm.form.father_parent_id.value,
        mother_parent_id: treeItemForm.form.mother_parent_id.value,
        description: treeItemForm.form.description.value,
        avatar_url: treeItemForm.form.avatar_url.value,
        adopted: undefined,
      }
    })
      .then(resp => {
        let data = resp.data.data;
        console.log(data.message);
        // this.makeToast(data.message, 'Ошибка', 'success');
      })
      .catch(err => {
        console.log(err.response.data.message);
        // this.makeToast(err.response.data.message, 'Ошибка', 'danger');
    })
  },
};

const mutations = {
  setForm: (state, form) => {

    if (!form) {
      form = {}
    }

    let keys = Object.keys(state.form)
    keys.forEach(key => {
      state.form[key].value = form[key];
    })
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};