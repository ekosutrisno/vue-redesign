import axios from 'axios';

const state = () => ({
  regions: [],
  summary: {},
  country: {},
})

const getters = {
  allRegions: (state) => state.regions,
  dataSummary: (state) => state.summary,
  dataCountry: (state) => state.country
}

const mutations = {
  setRegions: (state, regions) => (state.regions = regions),
  setCountry: (state, country) => (state.country = country),
  setSummary: (state, summary) => (state.summary = summary),
}

const actions = {
  async fetchRegions({
    commit
  }) {
    const response = await axios.get(`https://api.quarantine.country/api/v1/summary/latest?`);
    commit('setRegions', response.data.data.regions);
  },
  async setBySummary({
    commit
  }) {
    const response = await axios.get(`https://api.quarantine.country/api/v1/summary/latest?`);
    commit('setSummary', response.data.data.summary);
  },
  async setByCountry({
    commit
  }, country = 'indonesia') {
    const response = await axios.get(`https://api.quarantine.country/api/v1/summary/region?region=${country}`);
    commit('setCountry', response.data.data.summary)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
