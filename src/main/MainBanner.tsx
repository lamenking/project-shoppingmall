import Banner from '../components/main_banner/Banner';

import styled from 'styled-components';

export interface MainBannerProps {
	items: { id: string; alt: string; imgPath: string }[];
}

export default function MainBanner({ items }: MainBannerProps) {
	return (
		<>
			<Con>
				<Banner items={items}></Banner>
			</Con>
		</>
	);
}

const Con = styled.article`
	width: 100%;
	height: 350px;
	overflow: hidden;
	:hover {
		* {
			opacity: 1;
			visibility: visible;
		}
	}
`;
