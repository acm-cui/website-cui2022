---
label: Contact
description: Contact details for !!conference.short_name!! !!conference.year!!.
---

# Contact us

{% for group in site.data.oc %}
	{% for role in group[1]['roles'] %}
		{% if role[1]['contact'] %}
<p>Please send an email to the <a href="{{ role[1].email }}" title="Retrieve the email address for the {{ site.conference.short_name }} {{ site.conference.year }} {{ role[1].label }}">{{ site.conference.short_name }} {{ site.conference.year }} {{ role[1].label }}</a>, 
		{% assign use_and = role[1]['people'] | size | plus: -1 %}
		{% for person in role[1]['people'] %}{{ person.name }}{% if forloop.index == use_and %} and {% else %}{% unless forloop.last %}, {% endunless %}{% endif %}{% endfor %}.</p>
		{% break %}
		{% endif %}
	{% endfor %}
{% endfor %}

