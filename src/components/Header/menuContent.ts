  type MenuItem = {
    name: string;
    href: string;
    children?: MenuItem[];
};

const noticeGoogleDriveLink = "https://drive.google.com/drive/folders/1Q1nvRczGvLdASku9xe1qWQAjEC2l7cNx?usp=drive_link";
  
  const menuItems: MenuItem[] = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Admission", href: "/admission" },
    // {
    //   name: "Overview", children: [
    //     { name: "About us", href: "/about-us" },
    //     { name: "Our aim", href: "/our-aim" },
    //     { name: "Our methodology", href: "/our-methodology" },
    //     { name: "Our usp", href: "/our-usp" },
    //     { name: "Rules & Regulations", href: "/rules-and-regulations" },
    //   ]
    // },
    { name: "Overview", href: "/overview" },
    { name: "Fees", href: "/fees" },
    { name: "Notices", href: noticeGoogleDriveLink },
    { name: "Contact us", href: "/contact-us" }
  ];


  export {menuItems}
  export type { MenuItem }