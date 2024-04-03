<?php
// File to store the visit count
$counter_file = 'visit_count.txt';

// Check if the counter file exists
if (file_exists($counter_file)) {
    // Read the current count
    $count = intval(file_get_contents($counter_file));
} else {
    // Create the counter file and set count to 0
    file_put_contents($counter_file, '0');
    $count = 0;
}

// Increment the count
$count++;

// Update the counter file with the new count
file_put_contents($counter_file, $count);

// Return the count to display on the webpage
echo $count;
?>
