/**
 * Utility to automatically determine if the store is open based on Australian timezone
 * The store is closed on Tuesdays
 */

/**
 * Check if the store is currently open
 * @returns {boolean} - true if store is open, false if closed
 */
export const isStoreOpen = () => {
    // Get current day in Australian Eastern Time (AEDT/AEST)
    const australianTime = new Date().toLocaleString('en-US', {
        timeZone: 'Australia/Sydney',
        weekday: 'long'
    });

    // Store is closed on Tuesday
    const isTuesday = australianTime === 'Tuesday';

    return !isTuesday;
};