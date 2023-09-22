import { FC } from "react";
import { AffiliateLink } from "./affiliateLink";
import style from "../../styles/components/identitySection.module.css";
import ColoredStarknetIcon from "./iconsComponents/icons/coloredStarknetIcon";

interface IdentitySectionProps {
  domain: string;
  affiliateLink: string;
  tokenId: number;
}

export const IdentitySection: FC<IdentitySectionProps> = ({
  domain,
  affiliateLink,
  tokenId,
}) => {
  return (
    <div className={style.section}>
      <div className={style.column}>
        <div className="p-10 py-5">
          <div className="flex flex-row items-center">
            <ColoredStarknetIcon width="16" />
            <p className="ml-1 text-micro">{domain}</p>
          </div>
          <h1 className={`${style.title} uppercase font-bold`}>
            THE STARK AFFILIATE PROGRAM
          </h1>
          <p className="text-small mb-4">
            Empower your Earnings with StarknetID! Our contract-based affiliate
            system is your opportunity to earn while contributing to the growth
            of the Starknet Ecosystem. Each sale made by your referral link will
            permit you to earn 25% of the sale value in ETH while users that you
            refer will also generate up to 25% more revenue for you.
          </p>
          <AffiliateLink link={affiliateLink} domain={domain} />
        </div>
      </div>
      <div className={style.column}>
        <div className={style.hexagon}>
          <img
            src={`${process.env.NEXT_PUBLIC_STARKNET_ID}/api/identicons/${tokenId}`}
            width="100%"
            height="100%"
            alt="identicon"
          />
        </div>
      </div>
    </div>
  );
};
