import { useState } from "react";
import "../App.css"; 

export default function ItemList() {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem.trim()]);
      setNewItem("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  return (
    <div className="min-h-screen">
      <header className="header">
        <div className="header-icon">
          <div className="header-icon-bar"></div>
        </div>
        <h1 className="header-title">Item List Manager</h1>
      </header>

      <main className="main">
        <h2 className="title">Item List</h2>

        <div>
          <input
            type="text"
            placeholder="Enter item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyPress={handleKeyPress}
            className="input"
          />

          {/* Button */}
          <button onClick={handleAddItem} className="button">
            Add Item
          </button>

          {/* Item List */}
          <div className="item-list">
            {items.map((item, index) => (
              <div key={index} className="item">
                {item}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
