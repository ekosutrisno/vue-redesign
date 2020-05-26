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
    // const response = await this.$axios.$get(`https://api.quarantine.country/api/v1/summary/latest?`);
    // commit('setSummary', response.data.data.regions);
    const response = await this.$axios.$get(`https://api.covid19api.com/summary?`);
    commit('setRegions', response.Countries);
  },
  async setBySummary({
    commit
  }) {
    // const response = await this.$axios.$get(`https://api.quarantine.country/api/v1/summary/latest?`);
    // commit('setSummary', response.data.data.summary);
    const response = await this.$axios.$get(`https://api.covid19api.com/summary?`);
    commit('setSummary', response.Global);
  },
  async setByCountry({
    commit
  }, country = 'indonesia') {
    // const response = await this.$axios.$get(`https://api.quarantine.country/api/v1/summary/region?region=${country}`);
    // commit('setCountry', response.data.data.summary)
    const response = await this.$axios.$get(`https://api.covid19api.com/summary?`);
    commit('setCountry', response.Countries.filter(data => data.Country === "Indonesia")[0])
  },
  async getInfoDataCovid({
    commit
  }) {
    const response = await this.$axios.$get(`https://api.covid19api.com/summary?`);
    commit('setRegions', response.Countries);
    commit('setSummary', response.Global);
    commit('setCountry', response.Countries.filter(data => data.Country === "Indonesia")[0])
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
