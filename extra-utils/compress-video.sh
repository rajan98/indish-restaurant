#!/bin/bash

INPUT_VIDEO="$1"
FILENAME="${INPUT_VIDEO%.*}"

# Convert to WebM (VP9)
ffmpeg -i "$INPUT_VIDEO" -c:v libvpx-vp9 -b:v 800k -crf 30 -an -auto-alt-ref 4 -lag-in-frames 25 "${FILENAME}.webm"

# Convert to MP4 (H.264)
ffmpeg -i "$INPUT_VIDEO" -vcodec libx264 -crf 28 -preset slow -an "${FILENAME}-compressed.mp4"

echo "Conversion complete:"
echo "✔ ${FILENAME}.webm"
echo "✔ ${FILENAME}-compressed.mp4"