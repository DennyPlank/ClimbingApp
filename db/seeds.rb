# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'database_cleaner'
DatabaseCleaner.clean_with(:truncation)

ca = State.create(name: 'California', heatIndex: 'moderate')
ut = State.create(name: 'Utah', heatIndex: 'Dry/Hot')
wa = State.create(name: 'Washington', heatIndex: 'Wet, cold')

ca.routes.create(grade: '5.7', length: "5 pitches", name: "The Hunter")
ca.routes.create(grade: '5.12c', length: "3 pitches", name: "Run-n-away")

ut.routes.create(grade: '5.8', length: "2 pitches", name: "ABC's")
ut.routes.create(grade: '5.10b', length: "6 pitches", name: "Don't Look Down")

wa.routes.create(grade: '5.10a', length: "1 pitch", name: "Try Again")
wa.routes.create(grade: '5.11d', length: "5 pitches", name: "Break uh leg")
