import Link from "next/link";

const Navbar = () => {

    const myLinks = [
        {
            text: 'Home',
            url: "/",
        },
        {
            text: 'Dashboard',
            url: "/dashboard",
        },
        {
            text: 'About us',
            url: "/about-us",
        },
        {
            text: 'Contact Us',
            url: "/contact-us",
        },
    ]

    return (
        <nav className="flex justify-between flex-wrap p-3">
            {
                myLinks && 
                myLinks.map((item, idx) => {
                    item
                    return (
                        <ul className="flex" key={idx}>
                            <li className="m-3">
                                <Link href={item.url}>{item.text}</Link>
                            </li>
                        </ul>
                    )
                })
            }
        </nav>
    )
}

export default Navbar;