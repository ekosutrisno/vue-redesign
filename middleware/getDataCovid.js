import RSVP from 'rsvp';
export default async function ({
  store,
  from
}) {
  let setFrom = !from;
  if (setFrom) {
    await RSVP.all([
      store.dispatch("covid/getInfoDataCovid")
    ])
  }
}
