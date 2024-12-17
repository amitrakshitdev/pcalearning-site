import clsx from "clsx";

type ButtonProps = {
	buttonType: "primary-rounded" | "square" | "outlined";
} 


export default function Button({ children, buttonType, className, ...rest}: React.PropsWithChildren<React.ButtonHTMLAttributes<{}> & ButtonProps>): React.ReactElement {
	let styleClassNames = "";
	switch (buttonType) {
		case "primary-rounded": {
			styleClassNames = "rounded-full bg-primary text-textSecondaryColor";
			break;
		}
	}


    return <button className={clsx([className, "min-w-6 min-h-4", styleClassNames])} {...rest}>{children}</button>;
}
