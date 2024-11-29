import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import clsx from "clsx";
import Link from "next/link";

export default function Navigation() {
	const menuItems = [
		{ name: "Home", href: "/" },
		{ name: "Courses", href: "/courses" },
		{ name: "Admission", href: "/admission" },
		{
			name: "Overview", children: [
				{ name: "About us", href: "/about-us" },
				{ name: "Our aim", href: "/our-aim" },
				{ name: "Our methodology", href: "/our-methodology" },
				{ name: "Our usp", href: "/our-usp" },
				{ name: "Rules & Regulations", href: "/rules-and-regulations" },
			]
		},
		{ name: "Fees", href: "/fees" },
		{ name: "Contact us", href: "/contact-us" }
	];
	return (
		<NavigationMenu.Root
			orientation="horizontal"
			className={clsx([
				"min-w-[600px]",
			])}
		>
			<NavigationMenu.List className={clsx(["flex items-center justify-around"])}>
				{menuItems.map((item, index) => (
					<NavigationMenu.Item key={index}>
						{!item.children ? <NavigationMenu.Trigger className={clsx([
							"py-2 px-4",
							"min-w-20 w-auto",
							"border-transparent border-b-2 hover:border-primary"
						])}>
							<Link href={item?.href || "/"} className={clsx([
								"uppercase text-primary",
								"sm:text-sm",
								"md:text-base"])}>{item.name}</Link>
						</NavigationMenu.Trigger> :
							<>
								<NavigationMenu.Trigger
									className={clsx([
										"text-primary sm:text-sm md:text-base",
										"py-3 px-4",
										"uppercase max-w-28 text-center",
										"border-transparent border-b-2 hover:border-primary",
									])}
								>{item.name}

								</NavigationMenu.Trigger>
								<NavigationMenu.Content className={clsx(["fixed",
									"shadow-lg",
								])}>
									<NavigationMenu.Sub orientation="vertical" className={clsx(["bg-gray-50"])}>
										{item.children.map((subItem, index) => (
											<NavigationMenu.Item key={index}>
												<Link href={subItem.href}>
													<NavigationMenu.Trigger className={clsx([
														"py-3 px-7 w-full",
														"uppercase text-primary text-left",
														"sm:text-sm",
														"md:text-base",
														"hover:bg-blue-100"])}>
														{subItem.name}
													</NavigationMenu.Trigger>
												</Link>
											</NavigationMenu.Item>
										))}
									</NavigationMenu.Sub>
								</NavigationMenu.Content>
							</>
						}
					</NavigationMenu.Item>
				))}
			</NavigationMenu.List>
		</NavigationMenu.Root>
	)
};
