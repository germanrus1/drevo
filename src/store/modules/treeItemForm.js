
const state = {
  buttonType: 'create', // todo надо доделать или удалить
  form: {
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
  getButtonType: state => {
    return state.buttonType;
  },
}

const actions = {
  setForm: ({commit}, form) => {
    commit('setForm', form)
  }
};

const mutations = {
  setForm: (state, form) => {
    state.buttonType = 'update'

    if (!form) {
      form = {}
      state.buttonType = 'create'
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