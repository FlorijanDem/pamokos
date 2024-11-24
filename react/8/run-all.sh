for file in $(find . -name "*.js"); do
  echo "$file"
  node "$file"
done
