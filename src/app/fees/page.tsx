import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fees Structure",
    description: "Monthly fee structure for Pakrashi Computer Academy.",
};

const feeData = [
    { class: "Class 5 – 6", board: "ICSE / CBSE / State Board", fee: "₹ 400" },
    { class: "Class 7 – 8", board: "ICSE / CBSE", fee: "₹ 450" },
    { class: "Class 7 – 8", board: "State Board", fee: "₹ 400" },
    { class: "Class 9 – 10", board: "ICSE / CBSE", fee: "₹ 500" },
    { class: "Class 9 – 10", board: "State Board", fee: "₹ 450" },
    { class: "Class 11 – 12", board: "ICSE / CBSE", fee: "₹ 600" },
    { class: "Class 11 – 12", board: "State Board", fee: "₹ 500" },
];

export default function FeesPage() {
    return (
        <>
            <main className="w-full min-h-screen py-16 px-4 md:px-8 bg-background text-textColor">
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary underline decoration-primary-50 decoration-[4px] underline-offset-[8px] mb-6">
                            Fee Structure (Monthly)
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold text-textColor">
                            Pakrashi Computer Academy
                        </h2>
                        <h3 className="text-xl font-medium text-secondary">
                            (An Institute for Quality Computer Education)
                        </h3>
                    </div>

                    {/* Table Container */}
                    <div className="rounded-xl shadow-lg border-2 border-primary overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-primary text-textSecondaryColor">
                                        <th className="py-5 px-6 font-bold text-lg border-b-2 border-primary-50 whitespace-nowrap">
                                            Class Standard
                                        </th>
                                        <th className="py-5 px-6 font-bold text-lg border-b-2 border-primary-50 whitespace-nowrap">
                                            Board
                                        </th>
                                        <th className="py-5 px-6 font-bold text-lg border-b-2 border-primary-50 whitespace-nowrap">
                                            Monthly Fees (INR)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {feeData.map((row, idx) => (
                                        <tr
                                            key={idx}
                                            className={`border-b border-primary/20 hover:bg-primary-50 transition-colors ${
                                                idx % 2 === 0 ? "bg-background" : "bg-customGreyColor"
                                            }`}
                                        >
                                            <td className="py-4 px-6 text-textColor font-medium whitespace-nowrap">
                                                {row.class}
                                            </td>
                                            <td className="py-4 px-6 text-textColor opacity-90">
                                                {row.board}
                                            </td>
                                            <td className="py-4 px-6 font-bold text-primary whitespace-nowrap">
                                                {row.fee}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Footer Warning/Disclaimer */}
                    <div className="bg-primary-50 p-6 rounded-xl border border-primary shadow-sm mt-8 text-center">
                        <p className="text-textColor leading-relaxed opacity-90">
                            Note: The admission fee is a one-time payment of ₹100. The fees listed above are applicable on a monthly basis.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
