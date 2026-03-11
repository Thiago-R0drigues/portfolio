function Nav() {
    return (
        <div>
            <ul className="flex flex-row gap-20">
                <li className="cursor-pointer hover:border-green-600 hover:border-dotted duration-200"><span className="text-green-600">01.</span> <span className="text-gray-300">About</span></li>
                <li className="cursor-pointer hover:border-green-600 hover:border-dotted duration-200"><span className="text-green-600">02.</span> <span className="text-gray-300">Projects</span></li>
                <li className="cursor-pointer hover:border-green-600 hover:border-dotted duration-200"><span className="text-green-600">03.</span> <span className="text-gray-300">Contact</span></li>
                
            </ul>
        </div>
    )
}

export default Nav;