import React from 'react';

import { Card } from '@mui/material';
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';
import { IoHappy } from 'react-icons/io5';
import colors from 'assets/theme/base/colors';
import photojpg from "assets/images/photo.jpeg";
import VuiAvatar from "components/VuiAvatar";

const SatisfactionRate = () => {
	const { info, gradients } = colors;
	const { cardContent } = gradients;

	return (
		<Card sx={{ height: '340px' }}>
			<VuiBox display='flex' flexDirection='column'>
				<VuiBox sx={{ alignSelf: 'center', justifySelf: 'center', zIndex: '-1' }}>
					<VuiAvatar src={photojpg} alt={name}  style={{ width: "100%", height: "90%"}} variant="rounded" />
				</VuiBox>
			</VuiBox>
		</Card>
	);
};

export default SatisfactionRate;
