FactoryGirl.define do
  factory :page do
    title   { Faker::Lorem.sentence }
    content {
      Hash[Faker::Lorem.words(12)
        .collect { |v| [v, (v.upcase)]  }].to_json }
  end
end
