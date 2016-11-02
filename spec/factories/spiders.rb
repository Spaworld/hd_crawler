FactoryGirl.define do
  factory :spider do
    name          { Faker::Lorem.word }
    description   { Faker::Lorem.paragraph }
    style         { Faker::Lorem.word }
    entry_point   { Faker::Internet.url }
    instructions  {
      Hash[Faker::Lorem.words(12)
        .collect { |v| [v, (v.upcase)]  }].to_json }
  end
end
