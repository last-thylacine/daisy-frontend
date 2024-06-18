#!/bin/bash

# Check if exactly one argument is provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 string"
    exit 1
fi

# Get the argument
NEW_COMPONENT_NAME=$1

# Define the source template files
TSX_TEMPLATE="./templates/Component.tsx"
SCSS_TEMPLATE="./templates/Component.module.scss"

# Define the destination paths
TSX_DEST="./src/components/${NEW_COMPONENT_NAME}.tsx"
SCSS_DEST="./src/components/${NEW_COMPONENT_NAME}.module.scss"

# Check if the source files exist
if [ ! -f "$TSX_TEMPLATE" ]; then
    echo "Template file $TSX_TEMPLATE not found!"
    exit 1
fi

if [ ! -f "$SCSS_TEMPLATE" ]; then
    echo "Template file $SCSS_TEMPLATE not found!"
    exit 1
fi

# Copy the templates to the new locations with the new names
cp "$TSX_TEMPLATE" "$TSX_DEST"
cp "$SCSS_TEMPLATE" "$SCSS_DEST"

# Replace occurrences of __COMPONENT_NAME__ with the new component name in the copied files
sed -i "s/__COMPONENT_NAME__/${NEW_COMPONENT_NAME}/g" "$TSX_DEST"
sed -i "s/__COMPONENT_NAME__/${NEW_COMPONENT_NAME}/g" "$SCSS_DEST"

# Provide feedback to the user
echo "copied $TSX_TEMPLATE to $TSX_DEST"
echo "copied $SCSS_TEMPLATE to $SCSS_DEST"
echo "replaced __COMPONENT_NAME__ with $NEW_COMPONENT_NAME in $TSX_DEST and $SCSS_DEST"
