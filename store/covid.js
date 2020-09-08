const state = () => ({
  regions: [],
  summary: {},
  country: {},
})

const mutations = {
  setRegions: (state, regions) => (state.regions = regions),
  setCountry: (state, country) => (state.country = country),
  setSummary: (state, summary) => (state.summary = summary),
}

const actions = {
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
  mutations,
  actions
}
