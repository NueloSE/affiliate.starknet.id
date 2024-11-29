import React, { FunctionComponent } from "react";

const InfoIcon: FunctionComponent<IconProps> = ({ width, color }) => {
	return (
		<svg
			width={width}
			height={width}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M13.5437 10.2964C13.8453 9.56841 14.0005 8.78817 14.0005 8.00021C14.0005 6.40885 13.3683 4.88268 12.2431 3.75742C11.1178 2.63216 9.59162 2 8.00027 2C6.40892 2 4.88274 2.63216 3.75748 3.75742C2.63222 4.88268 2.00006 6.40885 2.00006 8.00021C2.00006 8.78817 2.15526 9.56841 2.4568 10.2964C2.75834 11.0244 3.20031 11.6858 3.75748 12.243C4.31465 12.8002 4.97611 13.2421 5.70409 13.5437C6.43207 13.8452 7.21231 14.0004 8.00027 14.0004C8.78823 14.0004 9.56847 13.8452 10.2965 13.5437C11.0244 13.2421 11.6859 12.8002 12.2431 12.243C12.8002 11.6858 13.2422 11.0244 13.5437 10.2964Z"
				fill="white"
			/>
			<path
				d="M8.66696 10.667H8.00027V8.00021H7.33358M8.00027 5.33345H8.00694M14.0005 8.00021C14.0005 8.78817 13.8453 9.56841 13.5437 10.2964C13.2422 11.0244 12.8002 11.6858 12.2431 12.243C11.6859 12.8002 11.0244 13.2421 10.2965 13.5437C9.56847 13.8452 8.78823 14.0004 8.00027 14.0004C7.21231 14.0004 6.43207 13.8452 5.70409 13.5437C4.97611 13.2421 4.31465 12.8002 3.75748 12.243C3.20031 11.6858 2.75834 11.0244 2.4568 10.2964C2.15526 9.56841 2.00006 8.78817 2.00006 8.00021C2.00006 6.40885 2.63222 4.88268 3.75748 3.75742C4.88274 2.63216 6.40892 2 8.00027 2C9.59162 2 11.1178 2.63216 12.2431 3.75742C13.3683 4.88268 14.0005 6.40885 14.0005 8.00021Z"
				stroke="#6D696A"
				stroke-width="1.52386"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export default InfoIcon;