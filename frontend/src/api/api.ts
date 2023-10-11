import axios, { type AxiosInstance } from 'axios'
import { type Antelope } from '~/types'

class Accessor {
  public axios (): AxiosInstance {
    return axios.create({
      baseURL: 'http://localhost:3000', // window.env.API_URL,
      timeout: 8000
    })
  }

  async fetchAntelope (): Promise<Antelope[]> {
    return await this.axios().get('/api/v1/antelopes')
      .then((r) => r.data)
  }
}

const accessor = new Accessor()

export default accessor
