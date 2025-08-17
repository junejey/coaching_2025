import { OLMatchModel } from '../types/olMatch';

export class OLMatchManager {
  /**
   * 获取比赛分数
   * @param matchID 比赛ID
   * @returns 比赛模型数据
   */
  async getMatchScore(matchID: number): Promise<OLMatchModel> {
    // 这里可以添加实际的API调用逻辑
    // 目前返回模拟数据
    return {
      matchID: matchID,
      matchScore: "2-1"
    };
  }
}
