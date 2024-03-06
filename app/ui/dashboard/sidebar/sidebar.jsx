import Image from "next/image";
import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdContacts,
    MdMarkunread,
    MdOutlineHotel,
    MdAirplanemodeActive,
    MdDoorbell,
    MdAllInclusive,
    MdOutlineWarning,
    MdOutlineViewHeadline,
    MdRecordVoiceOver,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,

} from "react-icons/md";
const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />,
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />,
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag />,
            },
            {
                title: "Contact Form Querys",
                path: "/dashboard/contactforns",
                icon: <MdContacts />,
            },
            {
                title: "Website Subscribers",
                path: "/dashboard/emailers",
                icon: < MdMarkunread />,
            },
        ],
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Hotels",
                path: "/dashboard/hotels",
                icon: <MdOutlineHotel />,
            },
            {
                title: "Tours",
                path: "/dashboard/tours",
                icon: <MdAirplanemodeActive />,
            },
            {
                title: "Category",
                path: "/dashboard/tourcategories",
                icon: <MdDoorbell />,
            },
            {
                title: "Inclusions",
                path: "/dashboard/inclusions",
                icon: <MdAllInclusive />,
            },
            {
                title: "Exclusions",
                path: "/dashboard/exclusive",
                icon: <MdOutlineWarning />,
            },
        ],
    },
    {
        title: "User",
        list: [
            {
                title: "Terms & Conditions",
                path: "/dashboard/terms",
                icon: <MdOutlineViewHeadline />,
            },
            {
                title: "Amenities",
                path: "/dashboard/amenities",
                icon: <MdRecordVoiceOver />,
            },
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings />,
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter />,
            },
        ],
    },
];


// Assuming menuLink is a React component
// const MenuLink = ({ item }) => {
//     return (
//         <a href={item.path} className={styles.menuLink}>
//             {item.icon}
//             <span>{item.title}</span>
//         </a>
//     );
// };



const Sidebar = () => {
    return (
        <>


            <div className={styles.contanier}>
                <div className={styles.user}>
                    <Image className={styles.userImage} src="/noavatar.png" alt="avatar" width="50" height="50" />

                    <div className={styles.userDetail}>
                        <span className={styles.username}>Sonu Singh</span>
                        <span className={styles.userTitle}>Admin</span>
                    </div>
                </div>
                <ul className={styles.list}>
                    {menuItems.map((cat) => (
                        <li key={cat.title}>

                            <span className={styles.cat}>{cat.title}</span>
                            {cat.list.map((item) => (
                                <MenuLink item={item} key={item.title} />
                            ))}
                        </li>
                    ))}
                </ul>
                <button className={styles.logout}>
                    <MdLogout />
                    Logout</button>
            </div>
        </>
    )
}

export default Sidebar;