import { NavLink } from "react-router-dom";

export default function navbar() {
    return (
        <nav className="fixed w-full bg-white p-4">
            <div className="flex items-center justify-between pr-1.5">
                <h2 className="text-xl font-bold text-teal-600">
                 Skill Analyzer
                </h2>
                <div className="space-x-8">
                    <a href="#home" className="text-gray-600 font-semibold hover:text-slate-800">
                        Home
                    </a>
                    <a href="#features" className="text-gray-600 font-semibold hover:text-slate-800">
                        Features
                    </a>
                </div>
            </div>
        </nav>
    )
}