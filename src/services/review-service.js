import axios from 'axios'

const reviewSummaryCache = {}

export const getReviews = async function() {
  const {data: {data}} = await axios.get('/api/reviews')
  return data
}

export const getReviewSummary = async function(id) {
  if (reviewSummaryCache[id]) return reviewSummaryCache[id]
  const {data: {data}} = await axios.get(`/api/reviews/${id}`)
  return reviewSummaryCache[id] = data
}
