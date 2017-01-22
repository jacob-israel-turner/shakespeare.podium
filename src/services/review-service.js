import axios from 'axios'

export const getReviews = async function() {
  const {data: {data}} = await axios.get('/api/reviews')
  return data
}

export const getReviewSummary = async function(id) {
  const {data: {data}} = await axios.get(`/api/reviews/${id}`)
  return data
}
