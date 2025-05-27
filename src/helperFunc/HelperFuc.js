const HandleSocketUpdate = (setter, extractListFn = null) => (newItem) => {
    setter((prev) => {
      if (!prev) {
        return extractListFn
          ? { totalCount: 1, [extractListFn.key]: [newItem] }
          : [newItem];
      }

      if (extractListFn) {
        // Handling objects like vehicles
        const currentList = Array.isArray(prev[extractListFn.key]) ? prev[extractListFn.key] : [];
        return {
          ...prev,
          totalCount: (prev.totalCount || 0) + 1,
          [extractListFn.key]: [newItem, ...currentList],
        };
      } else {
        // Handling arrays like signups/subscribers
        return Array.isArray(prev) ? [newItem, ...prev] : [newItem];
      }
    });
    console.log("Socket update:", newItem);
  };
  export default HandleSocketUpdate