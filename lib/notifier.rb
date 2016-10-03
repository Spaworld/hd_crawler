class Notifier

  def self.log(message_type, message_body = nil, listing_id = nil)
    return if Rails.env.test?
    listing_reference = " for listing #{listing_id}"
    case message_type
    when 'init'
      puts "=== #{message_body.capitalize} process stared" + listing_reference
    when 'notify'
      puts "--- #{message_body.capitalize}"
    when 'status'
      puts "... #{message_body.upcase}!"
    when 'terminate'
      puts "***********************************************"
      puts
    end
  end

end
