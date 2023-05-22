import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineStorefront, MdOutlineHome, MdOutlineList, MdOutlineSettings, MdOutlineAllInbox} from "react-icons/md";

export default function Nav() {
    const inactiveLink = 'flex gap-1 p-1';
    const activeLink = inactiveLink + ' bg-white text-blue-900 rounded-l-lg';
    const router = useRouter();
    const pathName = router.route;
    console.log(pathName)
    return (
        <aside className={'text-white p-4 pr-0 items-center'}>
            <Link href={'/'} className="flex gap-1 mb-4 mr-4 items-center">
                <MdOutlineStorefront size={32} />
                <span className=" items-center text-center">Ecommerce Admin</span>
            </Link>
            <nav className={'flex flex-col gap-2'}>
                <Link href={'/'} className={pathName === '/' ? activeLink : inactiveLink}>
                    <MdOutlineHome size={24} />
                    Dashboard
                </Link>
                <Link href={'/products'} className={pathName.includes('/products') ? activeLink : inactiveLink}>
                    <MdOutlineAllInbox size={24} />
                    Products
                </Link>
                <Link href={'/orders'} className={pathName.includes('/orders') ? activeLink : inactiveLink}>
                    <MdOutlineList size={24} />
                    Orders
                </Link>
                <Link href={'/settings'} className={pathName.includes('/settings') ? activeLink : inactiveLink}>
                    <MdOutlineSettings size={24} />
                    Setting
                </Link>
            </nav>
        </aside>
    )
}