export default async function ({
  store,
  from
}) {
  let setFrom = !from;
  if (setFrom) {
    await store.dispatch("covid/getInfoDataCovid");
  }
}
