import QueryString from 'qs';
import { getConfig } from './config.server';

export class RaindropService {
  private token?: string;
  private id?: number;

  public async raindrops(skip = 0, limit = 50, search = undefined) {
    await this.setProperties();
    const page = skip / limit;
    const qs = QueryString.stringify({
      perpage: limit,
      page,
      search
    });
    const resp = await this.fetch(
      `/raindrops/${this.id}?${qs}`
    );
    return resp;
  }

  public async raindrop(id: string) {
    const resp = await this.fetch(`/raindrop/${id}`);
    return resp.item;
  }

  public async deleteRaindrop(id: string) {
    const resp = await this.fetch(`/raindrop/${id}`, 'DELETE');
    return resp.result;
  }

  private async fetch(path: string, method = 'GET') {
    await this.setProperties();
    const resp = await fetch(`https://api.raindrop.io/rest/v1${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
    });
    try {
      return await resp.json();
    } catch (e) {
      console.error(e);
    }
    return {};
  }

  private async setProperties() {
    const config = await getConfig();
    this.token = config.RAINDROP_CLIENT_SECRET;
    this.id = parseInt(config.RAINDROP_COLLECTION_ID, 10);
    
  }
}

export const raindropService = new RaindropService();
