require 'csv'

class FileParser

  def self.get_ids(file_path)

    ids = []
    CSV.read(file_path, {
      headers: true,
      header_converters: :symbol
    }).each do |row|
      ids.push(row[:id])
    end
    ids.map(&:to_i)
  end

end
