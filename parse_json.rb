require 'json'
tweets = []
File.open('./rwot.json', 'r') do |file|
  file.readlines.each do |line|
    tweets << JSON.parse(line)
  end
end

File.open('./rwot.json', 'w') do |file|
  file.write(JSON.pretty_generate({ RWOT: tweets }))
end
