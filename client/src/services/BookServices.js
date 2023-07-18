import Client from './api'

export const getBookmarks = async () => {
  try {
    const res = await Client.get('/book')
    return res.data
  } catch (error) {
    throw error
  }
}

export const getBookmarkById = async (id) => {
  try {
    const res = await Client.get(`/book/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const createBookmark = async (data) => {
  try {
    console.log(data)
    const res = await Client.post('/book', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateBookmark = async (data, id) => {
  try {
    const res = await Client.put(`/book/${id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const deleteBookmark = async (id) => {
  try {
    const res = await Client.delete(`/list/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
