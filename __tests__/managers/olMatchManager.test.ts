import { OLMatchManager } from '../../managers/olMatchManager';
import { OLMatchModel } from '../../types/olMatch';

describe('OLMatchManager', () => {
  let matchManager: OLMatchManager;

  beforeEach(() => {
    matchManager = new OLMatchManager();
  });

  describe('getMatchScore', () => {
    it('应该返回正确的比赛数据', async () => {
      const matchID = 123;
      const result = await matchManager.getMatchScore(matchID);

      expect(result).toBeDefined();
      expect(result.matchID).toBe(matchID);
      expect(typeof result.matchScore).toBe('string');
      expect(result.matchScore).toBe('2-1');
    });

    it('应该返回OLMatchModel类型的数据', async () => {
      const result = await matchManager.getMatchScore(456);
      
      expect(result).toHaveProperty('matchID');
      expect(result).toHaveProperty('matchScore');
      expect(typeof result.matchID).toBe('number');
      expect(typeof result.matchScore).toBe('string');
    });
  });
});
