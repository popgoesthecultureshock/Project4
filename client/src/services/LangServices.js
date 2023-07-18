import Client from './api'

export const getLangs = async () => {
  try {
    const res = await Client.get('/list')
    return res.data
  } catch (error) {
    throw error
  }
}

export const createLang = async (data) => {
  try {
    const res = await Client.post('/list', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateLang = async (data, id) => {
  try {
    const res = await Client.put(`/list/${id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const deleteLang = async (id) => {
  try {
    const res = await Client.delete(`/list/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
