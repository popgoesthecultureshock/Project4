import Client from './api'

export const getSubjects = async () => {
  try {
    const res = await Client.get('/sub')
    return res.data
  } catch (error) {
    throw error
  }
}

export const getSubjectById = async (id) => {
  try {
    const res = await Client.get(`/sub/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const createSubject = async (data, id) => {
  try {
    const res = await Client.post(`/sub/${id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateSubject = async (data, id) => {
  try {
    const res = await Client.put(`/sub/${id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const deleteSubject = async (id) => {
  try {
    const res = await Client.delete(`/sub/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
