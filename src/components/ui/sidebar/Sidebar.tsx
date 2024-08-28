const Sidebar = () => {
    return (
        <div className="w-1/4 p-4 border-r">
            <div className="mb-6">
                <h3 className="text-lg font-semibold">Price</h3>
                <input type="range" min="16" max="120" className="w-full mt-2" />
                <div className="flex justify-between mt-2">
                    <span>€16,00</span>
                    <span>€120,00</span>
                </div>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold">Colour</h3>
                {/* Add Colour Filter Options */}
            </div>
            {/* Add other filters similarly */}
        </div>
    );
};

export default Sidebar;