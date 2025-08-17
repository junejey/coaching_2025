import { OLMatchManager } from '../managers/olMatchManager';
import { OLMatchModel } from '../types/olMatch';

/**
 * 处理获取分数的函数
 * @param matchID 比赛ID
 * @returns 比赛数据
 */
async function handleGetScore(matchID: number): Promise<OLMatchModel> {
  const matchManager = new OLMatchManager();
  return await matchManager.getMatchScore(matchID);
}

// 使用示例
async function example() {
  try {
    const matchData = await handleGetScore(123);
    console.log('比赛ID:', matchData.matchID);
    console.log('比赛分数:', matchData.matchScore);
  } catch (error) {
    console.error('获取比赛分数失败:', error);
  }
}

export { handleGetScore, example };
