---
label: Registration
description: Details about registration for the !!conference.year!! !!conference.full_name!! conference.
registration_open: false

menus:
  attendees:
    title: Registration
    alt: Registration details for !!conference.short_name!! !!conference.year!!.
    weight: 0
---

# Registration

{% if page.registration_open %}
Registration for {{ site.conference.short_name }} {{ site.conference.year }} is now open.
{% endif %}

{{ site.conference.short_name }} {{ site.conference.year }} is intended to be an in-person conference, as such our registration fees reflect running an in person event. That being said, we recognise that it may be possible for everyone who wishes to attend to do so in person. So we will also be offering online registration for a small fee to cover the costs of running the event (e.g., the various licences we have purchased as part of administering the conference, professional IT support etc.).

<div class="d-block py-5 mb-2 text-center">
{% if page.registration_open %}
	<a href="https://onlineshop.strath.ac.uk/conferences-and-events/science-faculty/computer-and-information-science/conversational-user-interfaces" class="btn btn-lg btn-primary" title="Register for {{ site.conference.short_name }} {{ site.conference.year }}">Register for {{ site.conference.short_name }} {{ site.conference.year }} &rarr;</a>
{% else %}
	<a class="btn btn-lg btn-outline-primary disabled">Registration is currently closed</a>
{% endif %}
</div>

Authors with papers accepted must register by **23rd June 2022**. At least one author of each accepted paper must be registered to attend the conference in person. A paper without a corresponding registration may be withheld from publication. We will support remote presentations if attendance is not possible. There will be no on site registration.

## Registration fees

There are four different rates for registration at {{ site.conference.short_name }} {{ site.conference.year }} and three different registration deadlines. Please ensure you register at the correct rate—if you do not, you will be liable to pay the difference.

<table class="registration-rates mx-auto mb-3 d-md-block d-none">
	<thead>
		<th></th>
		<th class="px-1">Student</th>
		<th class="px-1">Student<br>Reduced</th>
		<th class="px-1">Standard</th>
		<th class="px-1">Standard<br>Reduced</th>
		<th class="px-1">Online Only</th>
	</thead>
	<tbody>
		<tr>
				<td>Early<br><span class="small">Closes midnight 23rd June 2022</span></td>
				<td>£150</td>
				<td>£110</td>
				<td>£250</td>
				<td>£180</td>
				<td>£100</td>
		</tr>
		<tr>
				<td>Regular<br><span class="small">Closes midnight 15th July 2022</span></td>
				<td>£200</td>
				<td>£160</td>
				<td>£300</td>
				<td>£230</td>
				<td>£100</td>
		</tr>
		<tr>
				<td>Late<br><span class="small">Closes midnight July 22nd 2022</span></td>
				<td>£250</td>
				<td>£210</td>
				<td>£350</td>
				<td>£280</td>
				<td>£100</td>
		</tr>
	</tbody>
</table>


<table class="registration-rates mx-auto mb-3 d-md-none">
	<thead>
		<th style="width: 15%"></th>
		<th class="px-1">Student</th>
		<th class="px-1">Student<br>Reduced</th>
		<th class="px-1">Standard</th>
		<th class="px-1">Standard<br>Reduced</th>
		<th class="px-1">Online Only</th>
	</thead>
	<tbody>
		<tr>
				<td colspan="6"><strong>Early</strong> <span class="small">(closes midnight June 23rd 2022)</span></td>
		</tr>
		<tr>
				<td></td>
				<td>£150</td>
				<td>£110</td>
				<td>£250</td>
				<td>£180</td>
				<td>£100</td>
		</tr>
		<tr>
				<td colspan="6" class="border-top"><strong>Regular</strong> <span class="small">(closes midnight July 15th 2022)</span></td>
		</tr>
		<tr>
				<td></td>
				<td>£200</td>
				<td>£160</td>
				<td>£300</td>
				<td>£230</td>
				<td>£100</td>
		</tr>
		<tr>
				<td colspan="6" class="border-top"><strong>Late</strong> <span class="small">(closes midnight July 22nd 2022)</span></td>
		</tr>
		<tr>
				<td></td>
				<td>£250</td>
				<td>£210</td>
				<td>£350</td>
				<td>£280</td>
				<td>£100</td>
		</tr>
		
	</tbody>
</table>

The Reduced rate is only open to individuals in economically developing countries—please [check this list of countries]({{ '/attendees/reduced-rates/' | relative_url }} "Reduced Rate Eligibility for {{ site.conference.short_name }} {{ site.conference.year }}") to determine if you are eligible. The Student Rate is restricted to students, and you may be asked to provides evidence of your student status.

<!--
## Receipts

If the automated email confirmation is not adequate for your institutional records, please contact {% for group in site.data.oc %}
	{%- for role in group[1]['roles'] %}
		{%- if role[0] == 'registration' %}<a href="{{ role[1].email }}" title="Email address for the {{ site.conference.short_name }} {{ site.conference.year }} {{ role[1].label }}">{{ site.conference.short_name }} {{ site.conference.year }} {{ role[1].label }}</a>
		{%- assign use_and = role[0]['people'] | size | plus: -1 -%}
		{%- for person in role[0]['people'] %}{{ person.name }}{% if forloop.index == use_and %} and {% else %}{% unless forloop.last %}, {% endunless %}{% endif %}{% endfor %}
		{%- break -%}
		{%- endif -%}
	{%- endfor -%}
{%- endfor %} for a more complete receipt. Please include in your email a bullet-point list of what is required on the receipt.-->


## Need support, visa letters, or have a question?

{% for group in site.data.oc %}
	{% for role in group[1]['roles'] %}
		{%- if role[0] == 'general' %}
<p>If you need any support, a visa letter, or have questions about the registration process, please contact the <a href="{{ role[1].email }}" title="Email address for the {{ site.conference.short_name }} {{ site.conference.year }} {{ role[1].label }}">{{ site.conference.short_name }} {{ site.conference.year }} {{ role[1].label }}</a>.</p>
		{% break %}
		{% endif %}
	{% endfor %}
{% endfor %}
