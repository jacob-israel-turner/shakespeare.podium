import axios from 'axios'

export const getReviews = async function() {
  const {data: {data}} = await axios.get('/api/reviews')
  return data;
}
