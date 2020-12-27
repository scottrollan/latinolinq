import React from 'react';
import { fetchPledges } from '../api/client';

const useCampaign = () => {
  const [campaign, setCampaign] = React.useState('');

  React.useEffect(() => {
    let thisCampaign;
    const getCampaign = async () => {
      try {
        thisCampaign = await fetchPledges;
        // const signers = campaign[0].signers;
        // allPledgers = [...signers];
      } catch (error) {
        console.log(error);
      } finally {
        setCampaign(thisCampaign);
      }
    };
    getCampaign();
  }, []);
  return campaign;
};

export default useCampaign;
