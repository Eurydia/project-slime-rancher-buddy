import { FC } from "react";

import {
	ListItemIcon,
	ListItemText,
	MenuItem,
	TextField,
} from "@mui/material";

type StyledSelectProps = {
	label: string;
	value: string;
	onValueChange: (nextValue: string) => void;
	options: string[];
	optionToIconURL: (option: string) => string;
};
export const StyledSelect: FC<
	StyledSelectProps
> = (props) => {
	const {
		label,
		value,
		onValueChange,
		options,
		optionToIconURL,
	} = props;

	return (
		<TextField
			select
			fullWidth
			label={label}
			value={value}
			onChange={(event) =>
				onValueChange(event.target.value)
			}
			SelectProps={{
				SelectDisplayProps: {
					style: {
						display: "flex",
						alignItems: "center",
					},
				},
			}}
		>
			{options.map((option) => (
				<MenuItem
					key={option}
					value={option}
				>
					<ListItemIcon>
						<img
							height="48px"
							width="auto"
							alt={option}
							src={optionToIconURL(option)}
						/>
					</ListItemIcon>
					<ListItemText>{option}</ListItemText>
				</MenuItem>
			))}
		</TextField>
	);
};
