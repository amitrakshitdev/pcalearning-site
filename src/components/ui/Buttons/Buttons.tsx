import clsx from "clsx";
import Link from "next/link";

type ButtonProps = {
	buttonType: "primary-rounded" | "square" | "outlined";
} 

export default function Button({ children, buttonType, className, ...rest}: React.PropsWithChildren<React.ButtonHTMLAttributes<object> & ButtonProps>): React.ReactElement {
	let styleClassNames = "";
	switch (buttonType) {
		case "primary-rounded": {
			styleClassNames = "rounded-full bg-primary text-textSecondaryColor";
			break;
		}
	}


    return <button className={clsx([className, "min-w-6 min-h-4", styleClassNames])} {...rest}>{children}</button>;
}

export function ButtonLink({ children, buttonType, className, href, ...rest}: React.PropsWithChildren<React.AnchorHTMLAttributes<object> & ButtonProps>): React.ReactElement {
	let styleClassNames = "";
	switch (buttonType) {
		case "primary-rounded": {
			styleClassNames = "rounded-full bg-primary text-textSecondaryColor";
			break;
		}
	}

	return <Link href={href || "/"} className={clsx([className, "min-w-6 min-h-4 text-center", styleClassNames])} {...rest}>{children}</Link>;
}