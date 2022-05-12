import Banner from '../components/sub_banners/Banner';

export interface SubBannerProps {
	sub: {
		id: string;
		imgPath: string;
		alt: string;
	};
}

export default function DiscountBanner({ sub }: SubBannerProps) {
	return <Banner sub={sub}></Banner>;
}
