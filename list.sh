function_name () {
  for filename in `git ls-files --modified | grep package.json`; do
    cat "$filename" | jq -r '.name + "@" + .version'
  done
}


function_name
