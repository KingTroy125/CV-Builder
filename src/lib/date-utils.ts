
export const formatDate = (dateString: string): string => {
  if (!dateString) return "";
  
  try {
    // Handle YYYY-MM format
    if (/^\d{4}-\d{2}$/.test(dateString)) {
      const [year, month] = dateString.split("-");
      const date = new Date(parseInt(year), parseInt(month) - 1);
      return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    }
    
    // Handle full date strings
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  } catch (e) {
    console.error("Error formatting date:", e);
    return dateString;
  }
};
